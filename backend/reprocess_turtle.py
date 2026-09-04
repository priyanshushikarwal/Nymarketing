from gen_turtle_hero import remove_bg

if __name__ == "__main__":
    remove_bg(
        "/app/frontend/public/assets/turtle-hero-raw.png",
        "/app/frontend/public/assets/turtle-hero.png",
        thresh=200,
    )
