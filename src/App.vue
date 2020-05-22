<template>
  <div>
    <!-- Navigation bar for the website -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Projektuppgift - Loginsystem</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Skapa Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Visa Studenter</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>