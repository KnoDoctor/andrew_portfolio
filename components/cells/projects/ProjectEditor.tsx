import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../_atoms/Editor"), {
	ssr: false,
});

interface ProjectEditorProps {
	project: any;
	setUpdatedProjectData: any;
}

const ProjectEditor = ({ project, setUpdatedProjectData }: ProjectEditorProps) => {
	return <Editor data={project.data.data.project_data} setUpdatedData={setUpdatedProjectData} />;
};

export default ProjectEditor;
