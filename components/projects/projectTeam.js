import { Container, Row } from "reactstrap";
import Section from "../section";
import TeamMemberIcon from "../memberIcon";
import TeamData from "../../data/teamData";

// Preserve a predictable ordering in the aggregated project roster.
const ROLE_ORDER = {
  "Product Manager": 1,
  "Tech Lead": 2,
  "Product Designer": 3,
  "Developer": 4
};

// Supported role buckets when rosters are defined without individual objects.
const NO_PIC_SECTIONS = [
  { key: "pm", label: "Product Managers" },
  { key: "tl", label: "Tech Leads" },
  { key: "swe", label: "Developers" },
  { key: "design", label: "UI/UX Design" }
];

const normalizeName = name => (name || "").trim().toLowerCase();

// Index the canonical roster for quick merges with project-specific data.
const TEAM_MEMBER_LOOKUP = TeamData.team.reduce((acc, member) => {
  const key = normalizeName(member.name);
  if (key) {
    acc.set(key, member);
  }
  return acc;
}, new Map());

// Merge project overrides with canonical data while keeping existing photos/links.
const mapMemberData = member => {
  if (!member || !member.name) {
    return null;
  }
  const lookup = TEAM_MEMBER_LOOKUP.get(normalizeName(member.name));
  if (!lookup) {
    return null;
  }
  return {
    ...lookup,
    ...member,
    name: lookup.name,
    role: member.role || lookup.role,
    linkedin: member.linkedin || lookup.linkedin,
    nopic:
      member.nopic !== undefined
        ? member.nopic
        : lookup.nopic !== undefined
        ? lookup.nopic
        : false
  };
};

const ProjectTeam = ({ team }) => {
  if (!team || !team.detail) {
    return null;
  }

  // Flatten bucketed names into a single, deduped grid with photos when available.
  const renderNoPicTeam = () => {
    const allMembers = NO_PIC_SECTIONS.reduce((acc, { key }) => {
      const names = Array.isArray(team.detail[key]) ? team.detail[key] : [];
      names.forEach(name => {
        const member = mapMemberData({ name });
        if (!member) {
          return;
        }
        const keyName = normalizeName(member.name);
        if (!acc.has(keyName)) {
          acc.set(keyName, member);
        }
      });
      return acc;
    }, new Map());

    const members = Array.from(allMembers.values());

    if (!members.length) {
      return null;
    }

    return (
      <Row>
        {members
          .slice()
          .sort((a, b) => {
            const roleCompare = (ROLE_ORDER[a.role] || 999) - (ROLE_ORDER[b.role] || 999);
            return roleCompare !== 0 ? roleCompare : a.name.localeCompare(b.name);
          })
          .map(member => (
            <TeamMemberIcon
              key={`${member.name}-${member.role}`}
              name={member.name}
              role={member.role}
              linkedin={member.linkedin}
              nopic={member.nopic}
            />
          ))}
      </Row>
    );
  };

  // Handle rosters that already provide individual member objects.
  const renderTeamWithPics = () => {
    const members = Array.isArray(team.detail)
      ? team.detail.filter(member => member && member.name)
      : [];

    const validMembers = members.map(mapMemberData).filter(Boolean);

    return validMembers
      .sort((a, b) => {
        const roleCompare = (ROLE_ORDER[a.role] || 999) - (ROLE_ORDER[b.role] || 999);
        return roleCompare !== 0 ? roleCompare : a.name.localeCompare(b.name);
      })
      .map(member => (
        <TeamMemberIcon
          key={`${member.name}-${member.role}`}
          name={member.name}
          role={member.role}
          linkedin={member.linkedin}
          nopic={member.nopic}
        />
      ));
  };

  return (
    <Section>
      <Container>
        <div className="p-5 m-3">
          <h2 className="center"> Project Team </h2>
        </div>
        {team.type === "no-pic" ? renderNoPicTeam() : <Row>{renderTeamWithPics()}</Row>}
      </Container>
    </Section>
  );
};

export default ProjectTeam;
