Vue.component('form-register',{
    data(){
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    template: `
    <div class="container my-4">
      <div class="row">
        <div class="col-12 p-0 flex-col">
          <h5 class="font-weight-light mb-3 text-center">You shall not pass, please verify your identity</h5>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form  @submit.prevent="$emit('submit-register', { name: name, email: email, password: password})">
                <div class="form-group">
                    <label for="emailInput">Username</label>
                    <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter username"
                    />
                </div>

                <div class="form-group">
                  <label for="emailInput">Email address</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <div class="form-group">
                  <label for="passwordInput">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter password"
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})