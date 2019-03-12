Vue.component('eka-nav', {
    template: `
    <nav class="navbar">
        <div id="isiNav" class="home">
            <span class="item"><a href="#"><i class="far fa-newspaper"> Reader</i></a></span>
        </div>
        <div id="isiNav" class="logo">
            <span class="item"><a href="#"><i class="fab fa-wordpress-simple"></i> PresKu</a></span>
        </div>
        <div id="isiNav" class="help">
            <ul class="item"><a href="#"><i class="far fa-edit">Write</i></a></ul>
            <ul class="item"><a href="#"><i class="far fa-user-circle"></i></a></ul>
            <ul class="item"><a href="#"><i class="far fa-bell"></i></a></ul>
        </div>
    </nav>
    `
})