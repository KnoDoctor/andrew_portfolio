import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../_atoms/Editor"), {
	ssr: false,
});

interface ProjectEditorProps {
	project: any;
}

const ProjectEditor = ({ project }: ProjectEditorProps) => {
	return <Editor data={project.data.data.project_data} />;
};

export default ProjectEditor;
