import Post from "../models/posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
