import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const postApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),

    endpoints : (builder)=>({

            getAllPost : builder.query({
                query : ()=>({
                    url : 'posts',
                    method : 'GET',
                })
            }),
            getPostWithId : builder.query({
                query : (id)=>({
                    url : `posts/${id}`,
                })
            }),
            deletePost : builder.mutation({

                query : (id)=>{
                    console.log(id);
                  return{
                    url : `posts/${id}`,
                    method : 'DELETE'
                  }  
                }
            })

    })
})


export const {useGetAllPostQuery , useGetPostWithIdQuery ,useDeletePostMutation } = postApi;