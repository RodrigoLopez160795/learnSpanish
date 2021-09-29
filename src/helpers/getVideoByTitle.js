import courses from "./courses";

export const getVideoByTitle=(title)=>{
    return courses.find(course=> course.title===title);
}