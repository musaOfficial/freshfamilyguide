import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;