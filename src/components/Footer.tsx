import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="80"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        direction="row"
        wrap
        gap="40"
        paddingX="16"
        paddingY="32"
        horizontal="space-between"
      >
        {/* Column 1: About */}
        <Flex direction="column" gap="8" style={{ maxWidth: "30%" }}>
          <Text variant="body-default-l" onBackground="neutral-strong">
            About
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {person.name} is a passionate designer and developer focused on creating meaningful digital experiences.
          </Text>
        </Flex>

        {/* Column 2: Links */}
        <Flex direction="column" gap="8" style={{ maxWidth: "30%" }}>
          <Text variant="body-default-l" onBackground="neutral-strong">
            Quick Links
          </Text>
          <SmartLink href="/" >
            Home
          </SmartLink>
          <SmartLink href="/projects" >
            Projects
          </SmartLink>
          <SmartLink href="/about" >
            About
          </SmartLink>
          <SmartLink href="/contact" >
            Contact
          </SmartLink>
        </Flex>

        {/* Column 2: Links */}
        <Flex direction="column" gap="8" style={{ maxWidth: "30%" }}>
          <Text variant="body-default-l" onBackground="neutral-strong">
            Quick Links
          </Text>
          <SmartLink href="/" >
            Home
          </SmartLink>
          <SmartLink href="/projects" >
            Projects
          </SmartLink>
          <SmartLink href="/about" >
            About
          </SmartLink>
          <SmartLink href="/contact" >
            Contact
          </SmartLink>
        </Flex>

        {/* Column 3: Social */}
        <Flex direction="column" gap="8" style={{ maxWidth: "30%" }}>
          <Text variant="body-default-l" onBackground="neutral-strong">
            Connect
          </Text>
          <Flex gap="12" wrap>
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                )
            )}
          </Flex>
        </Flex>
      </Flex>

      {/* Bottom Attribution and Year */}
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingTop="32"
        paddingBottom="8"
        paddingX="16"
        gap="16"
        direction="column"
        horizontal="center"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong" align="center">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            / Built with{" "}
            <SmartLink
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
      </Flex>

      <Flex height="80" show="s" />
    </Flex>
  );
};
