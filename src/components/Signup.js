const Signup = () => {
    return (
            <>
             <div class="row justify-content-center mt-4">
            <div class="col-sm-5 mb-3">
                 <h3> SignUp</h3>
                </div>
            </div>
            <div className="row justify-content-center">
            <div class="col-sm-5 mb-3">
                <label for="" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
             </div>
             </div>
            <div class="row justify-content-center mt-1">
                <div class="col-sm-5 mb-3">
                    <label for="" class="form-label">email</label>
                    <input
                        type="email"
                        name=""
                        id=""
                        class="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                    />
                 
                </div>
            </div>
            <div className="row justify-content-center">
                <div class="col-sm-5 mb-3">
                    <label for="" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        name=""
                        id=""
                        placeholder=""
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div class="col-sm-5 mb-3">
                    <label for="" class="form-label">Phone Number</label>
                    <input
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                        placeholder=""
                    />
                </div>
            </div>
           


           




            <div className="row justify-content-center">
                <div class="col-sm-5 mb-3">
                   
                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        SignUp
                    </button>
                   
                </div>
            </div>
            </>
         );
}
 
export default Signup;
