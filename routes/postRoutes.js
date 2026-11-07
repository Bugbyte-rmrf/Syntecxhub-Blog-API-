
const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const router = express.Router();

// 1. CREATE A BLOG POST
router.post("/", async (req, res) => {
  try {
    const { title, body, author, tags } = req.body;

    const post = await Post.create({
      title,
      body,
      author,
      tags
    });

    res.status(201).json({
      message: "Blog post created successfully",
      post
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// 2. GET ALL POSTS WITH PAGINATION,
// FILTERING AND SORTING
router.get("/", async (req, res) => {
  try {
    // Pagination
    const limit = Math.max(
      1,
      Math.min(100, parseInt(req.query.limit) || 10)
    );

    const skip = Math.max(
      0,
      parseInt(req.query.skip) || 0
    );

    // Filtering
    const filter = {};

    // Filter by author
    if (req.query.author) {
      filter.author = {
        $regex: req.query.author,
        $options: "i"
      };
    }

    // Filter by tag
    if (req.query.tag) {
      filter.tags = {
        $regex: req.query.tag,
        $options: "i"
      };
    }

    // Filter by date
    if (req.query.startDate || req.query.endDate) {
      filter.createdAt = {};

      if (req.query.startDate) {
        filter.createdAt.$gte = new Date(
          req.query.startDate
        );
      }

      if (req.query.endDate) {
        const endDate = new Date(req.query.endDate);
        endDate.setUTCHours(23, 59, 59, 999);

        filter.createdAt.$lte = endDate;
      }

      if (
        Object.values(filter.createdAt).some(
          date => isNaN(date.getTime())
        )
      ) {
        return res.status(400).json({
          message: "Invalid date format. Use YYYY-MM-DD"
        });
      }
    }

    // Sorting
    const sortOrder =
      req.query.sort === "oldest" ? 1 : -1;

    // Retrieve posts
    const posts = await Post.find(filter)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limit);

    // Count matching posts
    const totalPosts = await Post.countDocuments(filter);

    res.status(200).json({
      totalPosts,
      limit,
      skip,
      currentPage: Math.floor(skip / limit) + 1,
      totalPages: Math.ceil(totalPosts / limit),
      posts
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// 3. GET A SINGLE POST BY ID
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid post ID"
      });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// 4. UPDATE A BLOG POST
router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid post ID"
      });
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json({
      message: "Blog post updated successfully",
      post
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// 5. DELETE A BLOG POST
router.delete("/:id", async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid post ID"
      });
    }

    const post = await Post.findByIdAndDelete(
      req.params.id
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json({
      message: "Blog post deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
