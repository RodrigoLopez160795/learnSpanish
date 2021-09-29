import courses from "./courses";

export const getCourse =(title='')=>{
    if(title===''){
        return [];
    }
    title=title.toLocaleLowerCase();
    return courses.filter(course=> course.title.toLocaleLowerCase().includes(title));
}