export default {
  usersCount: (state) => {
    const users = [...state.teachers, ...state.students]
    return users.length
  },
  TehranStudents: (state) => {
    const DATACITY = state.students.filter((student) => {
      return student.family
    })
    return DATACITY
  },

  TehranTeachers: (state) => {
    const data = state.teachers.filter((teacher) => {
      return teacher.family
    })
    return data
  }

}
