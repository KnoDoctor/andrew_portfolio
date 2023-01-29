import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../_atoms/Editor"), {
	ssr: false,
});

interface ArticleEditorProps {
	article: any;
	setUpdatedArticleData: any;
	setHasContentBeenEdited(value: boolean): void;
}

const ArticleEditor = ({
	article,
	setUpdatedArticleData,
	setHasContentBeenEdited,
}: ArticleEditorProps) => {
	return (
		<Editor
			data={article.data.data.article_data}
			setUpdatedData={setUpdatedArticleData}
			setHasContentBeenEdited={setHasContentBeenEdited}
		/>
	);
};

export default ArticleEditor;
