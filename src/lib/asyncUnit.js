const asyncUnit = {
    initState:()=>({
        post:{
            loading:false,
            success:false,
            post:null,
            error:null
        },
        posts:{
            loading:false,
            success:false,
            post:null,
            error:null
        }
    }),
    loading:()=>({
        loading:true,
        success:false,
        post:null,
        error:null
    }),
    success:(post)=>({
        loading:false,
        success:false,
        post,
        error:""
    }),
    error:(error)=>({
        loading:false,
        success:false,
        post:null,
        error
    })
}

export default asyncUnit;