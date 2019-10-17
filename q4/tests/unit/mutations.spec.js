import mutations from '@/store/mutations';

describe('addComment mutation', () => {
  it('Adding a comment', () => {
    const state = {comments: []};
    const payload = {
      author: 'test author',
      message: 'some default message',
      slug: 'book-one'
    };
    mutations.addComment(state, payload);
    expect(state.comments.length).toBe(1);
  });
});


