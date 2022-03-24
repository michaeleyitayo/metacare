import NavItem from "./nav-item";
import { ReactComponent as AdminIcon } from "../../../../assets/icons/users.svg";
import { ReactComponent as KnowledgeIcon } from "../../../../assets/icons/check.svg";
import { ReactComponent as TrainIcon } from "../../../../assets/icons/check.svg";
import { ReactComponent as AgentIcon } from "../../../../assets/icons/calendar.svg";
import { ReactComponent as HelpIcon } from "../../../../assets/icons/clock.svg";
import { ReactComponent as AnalyticsIcon } from "../../../../assets/icons/comment.svg";

const Nav = () => {
  return (
    <div className="w-full mt-[30px] pl-[24px] pr-[48px] gap-[25px] flex flex-col">
      <NavItem
        name="Admin"
        Icon={(props) => <AdminIcon {...props} />}
        subNavs={[{ name: "Item 1" }, { name: "Item 2" }]}
      />
      <NavItem
        name="Knowledge Base"
        Icon={(props) => <KnowledgeIcon {...props} />}
        subNavs={[{ name: "Item 1" }, { name: "Item 2" }]}
      />
      <NavItem
        name="Train SAM"
        Icon={(props) => <TrainIcon {...props} />}
        subNavs={[{ name: "Item 1" }, { name: "Item 2" }]}
      />
      <NavItem
        name="Agent Inbox"
        Icon={(props) => <AgentIcon {...props} />}
        subNavs={[{ name: "Item 1" }, { name: "Item 2" }]}
      />
      <NavItem
        name="Help Center"
        Icon={(props) => <HelpIcon {...props} />}
        subNavs={[{ name: "Item 1" }, { name: "Item 2" }]}
      />
      <NavItem
        name="Analytics"
        Icon={(props) => <AnalyticsIcon {...props} />}
        subNavs={[
          { name: "Teams" },
          { name: "Knowledge Base" },
          { name: "Training SAM" },
          { name: "Help Center" },
        ]}
        isActive
      />
    </div>
  );
};

export default Nav;
