module.exports={
    //关闭eslint
    lintOnSave:false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/yiyi-count/shanjia/'
        : '/'
}
