import styles from "./styles.module.css";

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net" },
    { label: "GitHub", href: "https://github.com/a2rp" },
    { label: "CodePen", href: "https://codepen.io/ash1198" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan" },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/" },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com" },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/" },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/ashishranjan" },
    { label: "Patreon", href: "https://www.patreon.com/ashishranjan" },
    {
        label: "Source code",
        href: "https://github.com/a2rp/sales-analytics-dashboard",
    },
];

const AppFooter = () => (
    <footer className={styles.appFooter}>
        <div className={styles.inner}>
            <div className={styles.credit}>
                <a
                    className={styles.logoLink}
                    href="https://www.ashishranjan.net"
                    aria-label="Ashish Ranjan portfolio"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Ashish Ranjan logo"
                    />
                </a>
                <p>
                    © {new Date().getFullYear()}{" "}
                    <a href="https://github.com/a2rp">Ashish Ranjan</a>. All
                    rights reserved.
                </p>
            </div>
            <nav className={styles.links} aria-label="Footer links">
                {links.map((link) => (
                    <a
                        href={link.href}
                        key={link.label}
                        target={
                            link.href.startsWith("mailto:")
                                ? undefined
                                : "_blank"
                        }
                        rel={
                            link.href.startsWith("mailto:")
                                ? undefined
                                : "noreferrer"
                        }
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
    </footer>
);

export default AppFooter;
