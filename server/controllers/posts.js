export const getPosts = (req, res) => {
    console.log('\nlocalhost:5000/posts'.green + '  path of post.js visited...\n'.yellow);
    res.json({
        'message':'posts.js working fine!'
    });
}