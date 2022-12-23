import { useState } from 'react'


const Footer = () => {
    return (
        <footer class="bg-dark py-4 mt-auto">
        <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto">
            <div class="small m-0 text-white">Copyright DAVID MONTES</div>
            </div>
            <div class="col-auto">
            <a class="link-light small" href="#!">Privacy</a>
            <span class="text-white mx-1"></span>
            <a class="link-light small" href="#!">Terms</a>
            <span class="text-white mx-1"></span>
            <a class="link-light small" href="#!">Contact</a>
            </div>
        </div>
        </div>
  </footer>
    )
}


export default Footer