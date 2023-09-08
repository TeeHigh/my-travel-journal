import React from 'react'

const Article = (props) => {
    // console.log(props)
    return (
        <>
            <article className="article" >
                {props.article}
            </article>
        </>
    )
}

export default Article