Vue.component('add-article-form', {
    template:`
    <form method="post">
        <input type="text" name="title" placeholder="Title">
        <br>
        <input type="text" name="content" placeholder="Content">
        <br>
        <button type="submit">Add Content</button>
    </form>
    `
})