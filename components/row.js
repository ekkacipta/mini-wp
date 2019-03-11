Vue.component('body-row', {
    template: `
    <div class="row">
        <div class="col-2">
            <ul class="item">
                <li><a href="#" id="samping"><i class="fas fa-desktop"> </i></a> View Site</li>
                <li><a href="#" id="samping"><i class="far fa-chart-bar"> </i></a> Stats</li>
                <li><a href="#" id="samping"><i class="fas fa-undo-alt"></i></a> Activity</li>
                <li><a href="#" id="samping"><i class="fas fa-globe-asia"></i></a> Plan</li>
            </ul>
            <ul class="item">
                Manage
                <br>
                <li><a href="#" id="samping"><i class="fas fa-file-alt"> </i></a> Site Pages</li>
                <li><a href="#" id="samping"><i class="fas fa-align-left"> </i></a> Blog Posts</li>
                <li><a href="#" id="samping"><i class="fas fa-image"> </i></a> Media</li>
                <li><a href="#" id="samping"><i class="fas fa-comments"> </i></a> Comments</li>
                <li><a href="#" id="samping"><i class="fas fa-shapes"> </i></a> Feedback</li>
                <li><a href="#" id="samping"><i class="fas fa-plug"> </i></a> Plugins</li>
                <li><a href="#" id="samping"><i class="fas fa-cloud-upload-alt"> </i></a> Import</li>
            </ul>
        </div>
        <div class="col-10" id="coba">
            <div class="bebas">
                <span><a href="" id="pub">Published <i class="far fa-circle"></i></a></span>
                <span><a href="" id="text">Drafts <i class="far fa-circle"></i></a></span>
                <span><a href="" id="search"><i class="fas fa-search"></i></a></span>
            </div>
        </div>
    </div>
    `
})