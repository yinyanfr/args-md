## :wrench: CLI

### Commands

#### chapter

`c, ch`

Download images from one chapter.

#### download

`d, dl`

Download chapters from a manga serie.

#### generate

`g, gen`

Generate template for your module.

#### help

Display help

#### list

`l, ls`

List all chapters of a manga serie.

#### version

Display version

### Options

- `-a, --archive`

Optional: Output zip or cbz archive grouped by chapters.

- `-A, --auth`

Optional: A string that contains token or cookie.

- `-b, --batch`

Optional: Set the number or images to be downloaded simultaneously, default to 1.

- `-C, --chapters`

Optional: Only downloading given list of chapters, example: -C 1,2,4,7

- `-c, --cookie`

Optional (but recommanded): Provide the path to a text file that contains your cookie.

- `-F, --format`

Optional: the format of downloaded picture, depending on the modules, example: webp / jpg.

- `-f, --from`

Optional: Starting chapter when downloading a serie, default to 0.

- `-g, --group`

Optional: For sites that provides series in groups, please refer to the site info docs, default to default.

- `-H, --help`

Output usage information

- `-h, --history`

Optional: (Experimental) Add the serie url to a given text file when using the `download` command, its value is default to a `history.txt` file under the same path of `--output`.

- `-I, --indexed-chapters`

Optional: Add index to the folder / archive file name of chapters.

- `-i, --info`

Optional: Generate ComicInfo.xml.

- `-l, --list`

Optional: (Experimental) The path to a text file that contains a list of URLs.

- `-M, --max-title-length`

Optional: restrict the length of title as the folder name.

- `-m, --module`

Optional: Specify the module (site) name. Will attempt to detect module by url if not set.

- `-n, --name`

Optional: Proride the serie title and override the folder name.

- `-o, --output`

Optional: The path where downloaded files are saved (default to .), setting this flag when using list will save a ComicInfo.xml to the path.

- `-O, --override`

Optional: overrides downloaded chapters.

- `-p, --presets`

Optional: loading a JSON file of site presets.

- `-r, --retry`

Optional: Automatically re-download chapters with failed images.

- `-S, --shorthand-url`

Optional: The shorthand url, please refer to the module docs.

- `-s, --slience`

Optional: Silence the console output, including the confirm prompt.

- `-T, --timeout`

Optional: Override the default 10s request timeout.

- `-t, --to`

Optional: Ending chapter when downloading a serie, defaults to chapter.length - 1.

- `-u, --url`

Optional: The url to the serie or the chapter.

- `-v, --verbose`

Optional: Display detailed error message, overrides silence.

- `-V, --version`

Output the version number

- `-y, --yes`

Optional: Skipping confirmation prompt when downloading series.

- `-z, --zip-level`

Optional: zip level for archive, default to 5.

### Examples

- Download a serie from its 10th chapter to 20th chapter to the given destination, 10 images at a time, output zip archives with ComicInfo.xml by chapter, retry if a chapter is not properly downloaded.

```bash
$ npx comic-dl dl -c cookie.txt -f 10 -t 20 -o ~/Download/manga -a zip -r -i -b 10 -u serie_url
```

- Download chapter index 0, 4, 12 from a serie, overriding downloaded files.

```bash
$ npx comic-dl dl -c cookie.txt -o ~/Download/manga -i -O -u serie_url -c 0,4,12
```

- Download from the group tankobon from a site that provide series in different groups.

```bash
$ npx comic-dl -u serie_url -g tankobon
```

- Download a serie with presets

```bash
$ npx comic-dl -p presets.json -u serie_url
```

- List all chapters of the given serie.

```bash
$ npx comic-dl ls -u serie_url
```

- Using shorthand URLs.

```bash
$ npx comic-dl -m zerobyw -S 12345
```

- Download a chapter named Chapter1 to current path.

```bash
$ npx comic-dl ch -n Chapter1 -u chapter_url -c cookie.txt
```

- Generate a new module named mySite.

```bash
$ npx . gen --module mySite
```

- Generate a presets json.

```bash
$ npx . gen --presets > presets.json
```
