//import all portrait images here first
    //post docs
    import morgan from '../images/team/morgan.jpg';
    import avinash from '../images/team/avinash.jpg';
    import teresa from '../images/team/teresa.jpg';
    //grad students
    import amanda from '../images/team/amanda.jpg';
    import jared from '../images/team/jared.jpg';
    //staff
    import dorian from '../images/team/dorian.jpg';
    //undergrads
    import isabelle from '../images/team/isabelle.jpg';
    import keaton from '../images/team/keaton.jpg';
    import tony from '../images/team/tony.jpg';

export const PeopleData = [
    // IMPORTANT NOTE: PORTRAIT IMAGES MUST BE RESIZED TO 286x286 PX OR THIS WILL NOT WORK AS INTENDED
    
    //Use '|' to separate education values (spaces don't matter)
        /*For rank, you should use: 
        postdoc
        gradstudent
        staff
        undergraduate
        */

    //Post Docs
    {
        name: 'AVINASH SINGH BALA',
        portrait: avinash,
        bio:'Avinash explores neuronal mechanisms that mediate behavioral decisions based on stimuli from our surroundings. His main interest is in developing methods to assess detection and discrimination, and translating these basic methods into applications. Avinash conducts research in olfaction and hearing, and in his startup,',
        rank:'postdoc',
        email:'avinash@uoregon.edu',
        education:'Ph.D. Neuroscience, Tata Institute of Fundamental Research|M.Sc. Microbiology, Panjab University',
        website:'Perceptivo LLC',
        weblink:'https://www.linkedin.com/company/perceptivo/'
    },
    {
        name:'MORGAN BROWN',
        portrait: morgan,
        bio:'placeholder text',
        rank:'postdoc',
        email:'morganallen@uoregon.edu',
        education:'Ph.D. Somewhere|MS. Mechanical Engineering, Washington State University|B.A. Physics, Math, Music, Linfield University',
        website:'',
        weblink:''
    },
    {
        name:'TERESA FINDLEY',
        portrait: teresa,
        bio:'Teresa utilizes electrophysiological techniques to investigate mitral and tufted cell activity in the olfactory bulb during active olfactory search.',
        rank:'postdoc',
        email:'tfindley@uoregon.edu',
        education:'Ph.D. Neuroscience, University of Oregon|B.S. Neuroscience and Behavioral Biology, Emory University',
        website:'',
        weblink:''
    },
    //Graduate Students
    {
        name:'JARED ACOSTA KING',
        portrait: jared,
        bio:'Jared is currently investigating potential patterns of olfactory motor facial movements in mice as they respond to attractive and aversive odor stimuli.',
        rank:'gradstudent',
        email:'jacostak@uoregon.edu',
        education:'Ph.D. candidate|B.A. Psychology, University of Oregon',
        website:'',
        weblink:''
    },
    {
        name:'AMANDA WELCH',
        portrait: amanda,
        bio:'Amanda is interested in olfactory hallucinations and auras related to epilepsy. Outside of the lab, she enjoys bouldering, walking her dog, and spending time in nature.',
        rank:'gradstudent',
        email:'awelch@uoregon.edu',
        education:'Ph.D. candidate| B.A. Psychology, University of California - San Diego| A.A. French, Grossmont College',
        website:'',
        weblink:''
    },

    //Staff
    {
        name:'DORIAN YEH',
        portrait: dorian,
        bio:'Having also minored in mathematics and chemistry, Dorian has a broad range of interests that range from tropical disease to software engineering. He investigates the effects of naris paralysis on olfactory navigation in mice. He participated in a service-learning program in Ghana during summer 2019, and is now applying for Ph.D. programs in neuroscience.',
        rank:'staff',
        email:'dyeh@uoregon.edu',
        education:'Lab Technician / Website Overlord|B.S. Biology, Psychology, University of Oregon',
        website:'Personal Website',
        weblink:'https://civond.github.io/'
    },

    // Undergraduates
    {
        name:'ISABELLE CULLEN',
        portrait: isabelle,
        bio:'Isabelle is a student in the Robert D. Clark Honors College and minors in psychology. She is primarily interested in investigating the neural mechanisms of olfactory deficits observed in Autism Spectrum Disorder.',
        rank:'undergraduate',
        email:'icullen@uoregon.edu',
        education:'Honors Biology Student',
        website:'',
        weblink:''
    },
    {
        name:'KEATON JONES',
        portrait: keaton,
        bio:'Keaton focuses on in the genetic code behind olfactory neurogenesis in the epithelium and pharmacogenetic targeting of degenerative neurons. He is also passionate about include playing guitar and snowboarding.',
        rank:'undergraduate',
        email:'keatonj@uoregon.edu',
        education:'Psychology Student',
        website:'',
        weblink:''
    },
    {
        name:'TONY MUNOZ',
        portrait: tony,
        bio:'Tony comes from a hispanic background and is deeply passionate about neuroscience. He minors in psychology and chemistry and works on our olfacto-motor assay, which measures a mouses ability to discriminate between different odor gradiants. His hobbies include playing basketball and video games.',
        rank:'undergraduate',
        email:'tmunoz@uoregon.edu',
        education:'Biology Student',
        website:'',
        weblink:''
    },
    {
        name:'TAKISHA TARVIN',
        portrait:'',
        bio:'placeholder',
        rank:'undergraduate',
        email:'',
        education:'Psychology Student',
        website:'',
        weblink:''
    },
    {
        name:'KAITLYN YAMADA',
        portrait:'',
        bio:'Kaitlyn enjoys learning about olfaction as it pertains to behavior and memory.',
        rank:'undergraduate',
        email:'',
        education:'Biology & Human Physiology Student',
        website:'',
        weblink:''
    }
]
