import PortfolioLink from "./Portfolio-Link"

const Portfolio = ({ children}: {
    children: React.ReactNode
}) => {
    return {children}
}
Portfolio.displayName = 'Portfolio'

Portfolio.Link = PortfolioLink
export default Portfolio