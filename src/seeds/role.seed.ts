interface RoleSeed {
    id?: string;
    title: "Interviewee" | "HR" | "Interviewer" | "Manager"
}

export const Roles: RoleSeed[] = [
    {title: "Interviewee"}, {title: "Interviewer"}, {title: "HR"}, {title: "Manager"}
]