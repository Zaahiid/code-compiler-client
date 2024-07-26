import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";

const HelperHeader = () => {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          variant="success"
          className="flex justify-center items-center gap-1"
        >
          <Save size={16} />
          Save
        </Button>
        <Button
          variant="secondary"
          className="flex justify-center items-center gap-1"
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>
    </div>
  );
};

export default HelperHeader;
