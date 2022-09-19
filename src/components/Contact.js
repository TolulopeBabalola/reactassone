import React from 'react'

function Contact() {
    return (
        <div>
            <div className='gem container-fluid pt-45'>
                <div className='row justify-content-center'>
                    <div class="card col-md-6">
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label" style={{ color: "black", fontWeight: "bold" }}>Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label" style={{ color: "black", fontWeight: "bold" }}>Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='footer text-center'>
                        <h6> ©2022 | Alabian Student</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact