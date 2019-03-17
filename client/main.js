let url = 'http://localhost:3000'


var app = new Vue({
    el: '#app',
    data:{
        name: '',
        email: '',
        password: '',
        title: '',
        content: '',
        createdAt: '',
        id_update: '',
        title_update: '',
        content_update: '',
        articles: [],
        user: [],
        seenAdd: false,
        seenList: false,
        seenUpdate: false,
        isLogin: true,
        isLogout: false,
        location: 'login'
    },
    created (){
        this.allData()
    },

    methods: {
        addArticles(){
            let data = {
                title: this.title,
                content: this.content,
                createdAt: new Date().toISOString()
            }
            axios
                .post(`${url}/article`, data)
                .then(({ data }) => {
                    swal('Successfully Post', '', "success")
                    this.articles.push(data)
                    this.title = ''
                    this.content = ''
                    this.onClickList()
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        onClickRegister(){
            this.location = 'register'
        },

        onClickList(){
            if(this.seenList === false){
               this.seenList = true 
               this.seenAdd = false
                this.seenUpdate = false
            }
            axios
                .get(`${url}/article`)
                .then(({ data }) => {
                    this.articles = data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        onClickAdd() {
            if(this.seenAdd === false) {
                this.seenAdd = true
                this.seenList = false
                this.seenUpdate = false
            }
        },
        onClickUpdate(){
            if(this.seenUpdate === false){
                this.seenUpdate = true
                this.seenAdd = false
                this.seenList = false
            }
        },
        onClickDelete(index, id){
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this post",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    axios
                        .delete(`${url}/article/${id}`)
                        .then((data) => {
                            this.articles.splice(index, 1)
                            swal("Poof! Your post has been deleted!", {
                                icon: "success",
                            });
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    
                } else {
                    swal("Delete cancel");
                }
          });
        },

        allData(){
            axios
                .get(`${url}/article`)
                .then(({ data }) => {
                    this.articles = data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        update(id){
            axios
                .get(`${url}/article/${id}`)
                .then(({ data }) => {
                    console.log(data)
                    this.seenUpdate = true
                    this.seenList = false
                    this.seenAdd = false
                    this.id_update = data._id
                    this.title_update = data.title
                    this.content_update = data.content
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        updated(){
            axios
                .put(`${url}/article/${this.id_update}`, { title: this.title_update, content: this.content_update})
                .then(({ data }) => {
                    swal('Successfully Update', '', "success")
                    this.onClickList()
                })
                .catch((err) => {
                    console.log(err)
                })

        },

        login(data) {
            this.email = data.email
            this.password = data.password

            axios
                .post(`${url}/users/login`, {
                    email: this.email,
                    password: this.password
                })
                .then(({ data }) => {
                    console.log(data)
                    swal(`Login Succesfull`, '', "success")
                    this.isLogin = false
                    this.isLogout = true
                    localStorage.setItem('token', data)
                })
                .catch((err) => {
                    swal(`Wrong Username/Password`, '', "error")
                })
        },

        register(data) {
            this.name = data.name
            this.email = data.email
            this.password = data.password

            axios
                .post(`${url}/users/register`, {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                .then(({ data }) => {
                    this.location = 'login'
                })
                .catch((err) => {
                    console.log(err)
                    swal('ERROR', 'Password must contain uppercase letter and number' + '\n' + 'OR' + '\n' +'Email already registred', "info")
                })
        },

        logout(){
            swal(`Logout Sucessfull`, '', "success")
            this.location = 'login'
            this.isLogin = true
            this.isLogout = false
            localStorage.clear()
        }
    }
});