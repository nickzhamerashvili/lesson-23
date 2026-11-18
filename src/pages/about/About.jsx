import { useEffect, useState } from "react";


// [1,2,3,4,5,6,7].map(function (elem) {
//     return elem.toString();
// })

function About () {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getValues()
    }, [])

    const getValues = async () => {
        let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        let tempPosts = await postsResponse.json()
        
        tempPosts = tempPosts.filter((_, index) => index < 20)
        setPosts(tempPosts)
    }

    // getValues() // async function 

    return (

        <div>
           
        {posts.map((post) => (
            <div key={post.id}>
                {post.title}
            </div>
        ))}
        
        </div>
    )
}

export default About