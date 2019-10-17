export default {
  getCommentsBySlug: state => slug => {
    return state.comments.filter(comment => comment.slug.toLowerCase() === slug.toLocaleString());
  }
};
