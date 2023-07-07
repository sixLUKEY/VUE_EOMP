import { createStore } from 'vuex'
const url = "https://sixlukey.github.io/data.json"


export default createStore({
  state: {
    education: null,
    projects: null,
    testimonials: null,
    skills: null
  },
  mutations: {
    setEducation: ( state, value ) => {
      state.education = value
    },
    setProjects: ( state, value ) => {
      state.projects = value
    },
    setTestimonials: ( state, value ) => {
      state.testimonials = value
    },
    setSkills: ( state, value ) => {
      state.skills = value
    }
  },
  actions: {
    async fetchEducation( context ){
      try {
        let { education } = await ( await fetch( url ) ).json()
        if ( education ){
          context.commit( "setEducation", education )
        } else {
          context.commit(alert("Next Time"))
        }
      } catch ( error ){
        alert("error")
      }
    },
   async fetchProjects( context ){
    try {
      let { projects } = await ( await fetch( url ) ).json()
      if ( projects ){
        context.commit( "setProjects", projects )
      } else {
        context.commit(alert("Next Time"))
      }
    } catch ( error ){
      alert("error")
    }
   },
   async fetchTestimonials( context ){
    try {
      let { testimonials } = await ( await fetch( url ) ).json()
      if ( testimonials ){
        context.commit( "setTestimonials", testimonials )
      } else {
        context.commit(alert("Next Time"))
      }
    } catch ( error ){
      alert("error")
    }
   },
   async fetchSkills( context ){
    try {
      let { skills } = await ( await fetch( url ) ).json()
      if ( skills ){
        context.commit( "setSkills", skills )
      } else {
        context.commit(alert("Next Time"))
      }
    } catch ( error ){
      alert("error")
    }
   }
  }
})
