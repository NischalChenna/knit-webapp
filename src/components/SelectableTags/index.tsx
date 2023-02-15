import { Tag } from "antd";
import { useState, useEffect } from "react";
import { TagOption } from "../../interfaces";
import { CloseOutlined } from "@ant-design/icons";

const { CheckableTag } = Tag;

interface OnChangeHandler {
  (e: any): void;
}
interface TagsProps {
  options: TagOption[];
  preSelectedTags?: TagOption[];
  value?: TagOption[];
  onChange?: OnChangeHandler;
}

const SelectableTags = ({
  options,
  preSelectedTags = [],
  value = [],
  onChange,
}: TagsProps) => {
  const [selectedTags, setSelectedTags] = useState<TagOption[]>(
    value?.length ? value : preSelectedTags
  );

  const isTagSelected: Function = (tag: TagOption): boolean => {
    if (selectedTags.length == 0) return false;
    else {
      return !!selectedTags.find((selTag: Record<string, any>) =>
        selTag.id
          ? selTag?.id == selTag?.id
          : selTag.value
          ? selTag?.value == tag?.value
          : selTag.label == tag.label
      );
    }
    //return selectedTags.includes(tag);
  };

  const handleTagsChange: Function = (tag: TagOption, isChecked: boolean) => {
    const newSelectedTags = isChecked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(newSelectedTags);
    if (onChange) {
      onChange(newSelectedTags);
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {options.map((optionItem: TagOption) => {
        return (
          <CheckableTag
            onChange={(checked) => handleTagsChange(optionItem, checked)}
            checked={isTagSelected(optionItem)}
            style={{ height: "2.5rem" }}
            className={
              "mr-2 my-2 py-2 " + (isTagSelected(optionItem) ? "px-2" : "px-3")
            }
            key={optionItem?.id || optionItem?.label || optionItem?.value}
          >
            {optionItem?.label || optionItem?.value}
            {isTagSelected(optionItem) && <CloseOutlined />}
          </CheckableTag>
        );
      })}
    </div>
  );
};

export default SelectableTags;
