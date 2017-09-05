require.config({
    baseUrl:'./js',
    paths:{
        a:'./a',
        b:'./b'
    }
})
define(['a','b'],function () {
    console.log('再来');
})