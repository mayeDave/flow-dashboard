import { useState } from "react";

import PageLayout from "../../components/layout/PageLayout";
import ProfileForm from "./ProfileForm";

type TabType = "profile" | "preferences" | "security";

export default function SettingsPage() {
  const [tab, setTab] = useState<TabType>("profile");

  return (
    <PageLayout>

      <div className="space-y-6">


        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          {/* Tabs */}
          <div className="flex gap-8 border-b mb-8">

            <TabButton
              active={tab === "profile"}
              onClick={() => setTab("profile")}
            >
              Edit Profile
            </TabButton>

            <TabButton
              active={tab === "preferences"}
              onClick={() => setTab("preferences")}
            >
              Preferences
            </TabButton>

            <TabButton
              active={tab === "security"}
              onClick={() => setTab("security")}
            >
              Security
            </TabButton>

          </div>

          {/* Content */}
          {tab === "profile" && <ProfileForm />}

          {tab === "preferences" && (
            <div className="py-16 text-center text-slate-400 text-sm">
              Preferences coming soon
            </div>
          )}

          {tab === "security" && (
            <div className="py-16 text-center text-slate-400 text-sm">
              Security settings coming soon
            </div>
          )}

        </div>

      </div>

    </PageLayout>
  );
}

/* ---------------- TAB BUTTON ---------------- */

type TabButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

function TabButton({
  children,
  active,
  onClick,
}: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        pb-3
        text-sm
        font-medium
        transition
        border-b-2
        ${
          active
            ? "border-black text-black"
            : "border-transparent text-slate-400 hover:text-black"
        }
      `}
    >
      {children}
    </button>
  );
}
