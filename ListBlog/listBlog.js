const posts = [
    { name: "post1", date: "date1", text: "post1 text" },
    { name: "post2", date: "date2", text: "post2 text" },
    { name: "post3", date: "date3", text: "post3 text" },
];

const listPosts = () => {
    posts.map(post => {
        console.log(post);
    })
};

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject("Post not added.")
    });
    return promise;
};

async function showPosts() {
    try {
        await addPost({ name: "post4", date: "date4", text: "post4 text" });
        listPosts();

    } catch (error) {
        console.log(error);
    }
}

showPosts();