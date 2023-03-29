import { createRouter, createWebHistory } from "vue-router";

import MatchCreate from "./components/match/MatchCreate.vue";
import MatchDetails from "./components/match/MatchDetails.vue";
import MatchList from "./components/match/MatchList.vue";

import Home from "./components/player/Home.vue";
import Login from "./components/player/Login.vue";
import NotFound from "./components/player/NotFound.vue";
import PlayerProfile from "./components/player/PlayerProfile.vue";
import SignUp from "./components/player/SignUp.vue";

import TeamCreate from "./components/team/TeamCreate.vue";
import TeamDetails from "./components/team/TeamDetails.vue";
import TeamList from "./components/team/TeamList.vue";

import TournamentCreate from "./components/tournament/TournamentCreate.vue";
import TournamentDetails from "./components/tournament/TournamentDetails.vue";
import TournamentList from "./components/tournament/TournamentList.vue";
import TournamentParticipants from "./components/tournament/TournamentParticipants.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: null },
    { path: "/login", component: null },
    { path: "/signup", component: null },
    { path: "/player", component: null },
    { path: "/tournaments", component: null },
    { path: "/tournament-create", component: null },
    {
      path: "/tournaments/:id",
      component: null,
      children: [
        { path: "/teams", component: null },
        { path: "/teams/:id", component: null },
        { path: "/team-create", component: null },
        { path: "/matches", component: null },
        { path: "/matches/:id", component: null },
        { path: "/matche-create", component: null },
        { path: "/participants", component: null },
      ],
    },
    { path: "/:notFound(.*)", component: null },
  ],
});

export default router;
