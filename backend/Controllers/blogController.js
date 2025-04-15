const Blog  = require("../Models/blogModel");

const createBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      author,
      readTime,
      publishDate,
      content,
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const blog = await Blog.create({
      title,
      category,
      author,
      readTime,
      publishDate,
      content,
      image,
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getLatestBlog = async (req, res) => {
    try {
      const blog = await Blog.findOne({
        order: [["publishDate", "DESC"]],
      });
  
      if (!blog) {
        return res.status(404).json({ message: "No blogs found" });
      }
  
      res.status(200).json(blog);
    } catch (error) {
      console.error("Error fetching latest blog:", error);
      res.status(500).json({ message: "Failed to fetch latest blog" });
    }
  };
  

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      order: [['createdAt', 'DESC']],    });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};

const deleteBlog = async (req, res) => {
    try {
      const blog = await Blog.findByPk(req.params.blogId);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      await blog.destroy();
      res.status(200).json(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ message: "Failed to fetch blog" });
    }
  };

  const updateBlog = async (req, res) => {
    try {
      const blog = await Blog.findByPk(req.params.blogId);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      const {
        title,
        category,
        author,
        readTime,
        publishDate,
        content,
      } = req.body;
  
      const image = req.file ? req.file.filename : blog.image;
  
      await blog.update({
        title,
        category,
        author,
        readTime,
        publishDate,
        content,
        image,
      });
  
      res.status(200).json(blog);
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ message: "Failed to update blog" });
    }
  };
  
  module.exports={createBlog,getAllBlogs,getBlogById,deleteBlog,updateBlog,getLatestBlog}