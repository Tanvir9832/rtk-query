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
            }),
            createPost : builder.mutation({
                query : (data)=>{
                    console.log(data);
                    return {
                        url : "posts",
                        method : "POST",
                        body : data,
                        headers : {
                            authorization : `Bearer ${localStorage.getItem("token")}`,
                        }
                    }
                }
            }),
            updatePost : builder.mutation({
                query : (data)=>{
                    const {uid , ...restData } = data;
                    console.log(data);
                    console.log(uid);
                    console.log(restData);
                    return{
                        url : `posts/${uid}`,
                        method : "PUT",
                        body : restData,
                        headers : {
                            authorization : `Bearer ${localStorage.getItem("token")}`
                        }

                    }
                }
            })

    })
})


export const {useGetAllPostQuery , useGetPostWithIdQuery ,useDeletePostMutation , useCreatePostMutation ,useUpdatePostMutation } = postApi;