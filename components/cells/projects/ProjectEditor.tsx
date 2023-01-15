import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../_atoms/Editor"), {
	ssr: false,
});

interface ProjectEditorProps {
	project: any;
	setUpdatedProjectData: any;
	setHasContentBeenEdited(value: boolean): void;
}

const ProjectEditor = ({
	project,
	setUpdatedProjectData,
	setHasContentBeenEdited,
}: ProjectEditorProps) => {
	return (
		<Editor
			data={project.data.data.project_data}
			setUpdatedData={setUpdatedProjectData}
			setHasContentBeenEdited={setHasContentBeenEdited}
		/>
	);
};

export default ProjectEditor;
