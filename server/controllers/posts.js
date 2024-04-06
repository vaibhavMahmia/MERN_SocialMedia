import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "No post with that id" });
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { creator, title, message, tags, selectedFile, _id: id },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "No post with that id" });
    await PostMessage.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.userId) return res.json({ message: "Unauthenticated" });
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "No post with that id" });
    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) post.likes.push(req.userId);
    else post.likes = post.likes.filter((id) => id !== String(req.userId));

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
