<script>
  import searchbarimage from "./images/searchbar.jpg";
  import addimage from "./images/add.jpg";
  import calenimage from "./images/calendrier.jpg";
</script>

<div class=" bg-zinc-800 h-screen">
  <div class="navbar bg-zinc-800">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
    </div>
    <div class="navbar-center secondary lg:flex">
      <strong>Home</strong>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-bottom dropdown-end">
        <label
          for="dropdown-menu"
          tabindex="-1"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <ul
          tabindex="-1"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-zinc-800"
          id="dropdown-menu"
        >
          <li><a href="/signin">Log in </a></li>
          <li><a href="/signup">Sign Up </a></li>
          <li><a href="/calendrier">calendrier </a></li>
          
        </ul>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-0 h-screen">
    <!-- colonne de gauche-->
    <div class="bg-zinc-600" />
    <!-- colonne du centre -->
    <div class="bg-zinc-600 col-span-2">
      <div
        class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
      >
        <p>
          Ce site a pour but de vous accompagner dans vos tâches journalières et
          vous aider a être organiser avec l'ajout de todo
        </p>
        <div
          class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
        />
        <div class="carousel w-full">
          <div id="slide1" class="carousel-item relative w-full">
            <img src={calenimage} alt="calendrier" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src={addimage} alt="calendrier" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src={searchbarimage} alt="calendrier" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div
          class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
        >
          Ce site vous offrira une interface épuré au design minimaliste pour
          vous ordonner et consulter vos todo.
        </div>
      </div>
    </div>
    <!-- colonne de droite -->
    <div class="bg-zinc-600" />
  </div>
</div>
