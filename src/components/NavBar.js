import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useContext(AppContext);
  ////////////////////////////////////////////////////////////////
  let pages = [];
  if (!user?.token) {
    pages.push({
      label: "SIGN IN / REGISTER",
      path: "/register",
    });
  } else {
    pages.push(
      { label: "Books collection", path: "/collection" },
      { label: "My books", path: "/mybooks" },
      { label: "Profile", path: "/profile" },
      { label: "Logout", path: "/logout" }
    );
  }

  const settings = [
    { label: "Profile", path: "/profile" },
    { label: "My books", path: "/mybooks" },
    { label: "Logout", path: "/logout" },
  ];
  ////////////////////////////////////////////////////////////////
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ margin: "auto", maxWidth: "1200px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          {user?.token ? (
            <Link
              to="/collection"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AutoStoriesTwoToneIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <AutoStoriesTwoToneIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
            </Link>
          )}

          {/* BOOKSTORE */}
          {user?.token ? (
            <Link
              to="/collection"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },

                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                BOOKSTORE
              </Typography>
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },

                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                BOOKSTORE
              </Typography>
            </Link>
          )}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.label}
                  to={page.path}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* ICON RESPONSIVE */}
          {user?.token ? (
            <Link
              to="/collection"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AutoStoriesTwoToneIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <AutoStoriesTwoToneIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
            </Link>
          )}

          {user?.token ? (
            <Link
              to="/collection"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                BOOKSTORE
              </Typography>
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                BOOKSTORE
              </Typography>
            </Link>
          )}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.label}
                to={page.path}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
          {user?.token ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Sponge Bob"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Link
                    key={setting.label}
                    to={setting.path}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        {setting.label}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
