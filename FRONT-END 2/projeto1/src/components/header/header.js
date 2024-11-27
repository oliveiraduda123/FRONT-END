'use client';
import Link from "next/link"
import ".header.modules.css"
import Image from "next/image";
import { useState } from "react";
import React, { } from "react";


export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return ()
}
<header>
    <nav>
        <div class="header" id="header">
            <button onclick="toggleSidebar" class="btn_icon_header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>

            </button>
            <div class="logo_header">
                <Image src="./img/logo.png" alt="logo M">
            </div>
            <div class="navigation_header">
                <button onclick="toggleSidebar" class="btn_icon_header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
                <a href="#" class="active">Inicio</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </div>
        </div>
        <div tabindex="0" onclick="closeSidebar()" class="content" id="content">
            <h1>Bem vindos a página inicial!</h1>

        </div>
        <script>
            var header = document.getElementById('header');
            var navegationHeader = document.getElementById('navegation_header');
            var content = document.getElementById('content');
            var showSidebar = false;

            function toggleSidebar()
            {
                showSidebar = showSidebar;
            console.log(showSidebar)
            if(showSidebar)
            {
                navegationHeader.style.marginLeft = '-10vw';
            navegationHeader.style.marginLeft = '-10vw';
            content.style.filter = 'blur(2px)';
            }
            else
            {
                navegationHeader.style.marginLeft = '-100vw';
            navegationHeader.style.marginLeft = '';
            content.style.filter = '';
            }
        }

            function closeSidebar()
            {
        if(showSidebar)
            {
                toggleSidebar();
        }
    }
            window.addEventListener('resize', function (event) {
        if(window.innerWidth > 768 && showSidebar)
            {
                toggleSidebar();
    }
});
        </script>
    </nav>
</header>
