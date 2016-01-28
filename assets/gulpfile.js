/**
 * Fichier de configuration gulp pour le projet Pyla
 * Créé par Ludovic Sire(ludovic.sire@gmail.com) - 10/12/2015
 */

var gulp = require('gulp');

// Ce plugin sert à minifier  le javascript, on l'utilise pour les JS vendors en dev et pour tous les JS en dist
var uglify = require('gulp-uglify');

/**
 * Mise en place du gestionnaire d'erreurs
 */
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

/* Définition d'un errorHandler qui va notifier l'utilisateur */
var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

/**
 * @task : default
 * S'affiche quand on invoque gulp sans argument, nous servira d'aide-mémoire pour les tâches qu'on propose
 */
gulp.task('default', function(){
    console.log('Gulp OK. Commandes disponibles : sass, js, img, watch');
});


/**
 * @task : sass
 * Compilation des fichiers sass en css standard et déplacement dans le répertoire dédié aux css
 */

var sass = require('gulp-sass');
// Sourcemaps permet de générer des fichiers maps utilisables par les navigateurs pour maintenir des
// numéros de ligne corrects même après la compilation sass, utile pour le debug des css
var sourcemaps = require('gulp-sourcemaps');
// autoprefixer rajoute les prefixes navigateur nécessaires et supprime ceux qui ne le sont pas
// par rapport aux navigateurs cible qu'on lui donne
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
 
    gulp.src('./src/sass/**/*.scss')
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))
    	.pipe(sourcemaps.init())
    	// Compilation Sass
        .pipe(sass())
        // On cible les 3 dernieres versions de chaque browser
        .pipe(autoprefixer('last 4 version'))
        // Ecrit le sourcemap dans le fichier compilé
        .pipe(sourcemaps.write())
        // Copie des fichiers dans le répertoire css
        .pipe(gulp.dest('./css'));
 
});


/**
 * @task : css-vendors
 * Concaténation des fichiers externes css en un fichier vendors.css
 */

gulp.task('css-vendors', function () {
 
    gulp.src('./src/vendors/css/*.css')
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))
    	.pipe(sourcemaps.init())
    	// Concatenation en un seul fichier
    	.pipe(concat('vendors.css'))
        // Ecrit le sourcemap dans le fichier compilé
        .pipe(sourcemaps.write())
        // Copie des fichiers dans le répertoire css
        .pipe(gulp.dest('./css'));
 
});

/**
 * @task : js
 * Traitement des fichiers JS
 */
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

gulp.task('js', function () {
 
	gulp.src('./src/js/*.js')
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))
    	.pipe(sourcemaps.init())
	 	// Analyse du code JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// Interrompt l'exécution si l'analyse échoue, commenter cette ligne pour pouvoir finaliser la tâche malgré cela
		.pipe(jshint.reporter('fail'))
		// Concaténation dans un seul fichier
		.pipe(concat('main.js'))
		.pipe(sourcemaps.write())
		// Copie dans le répertoire Js
		.pipe(gulp.dest('js'));
 
});

/**
 * @task : js-vendors
 * Traitement des fichiers JS externes
 */


gulp.task('js-vendors', function () {
 
	gulp.src(['./src/vendors/js/*.js','./src/vendors/js/*.min.js'])
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))	
    	.pipe(sourcemaps.init())
    	.pipe(uglify({
    			ignoreFiles: ['.min.js', '-min.js']
    		}))
		// Concaténation dans un seul fichier
		.pipe(concat('vendors.js'))
		.pipe(sourcemaps.write())
		// Copie dans le répertoire Js
		.pipe(gulp.dest('js'));
 
});

/**
 * @task : js-vendors-pass-thru
 * Traitement des fichiers JS externes qu'on ne fait que copier
 */


gulp.task('js-vendors-pass-thru', function () {
 
	// Tous les fichiers js sauf ceux qui matchent *.min.js (fichiers déjà minifiés normalement)
	gulp.src(['./src/vendors/js/pass-thru/*.js','./src/vendors/js/pass-thru/*.min.js'])
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))	
    	.pipe(uglify())
		// Copie dans le répertoire Js
		.pipe(gulp.dest('js/vendors'));
 
});


/**
 * @task  : js-vendors-spec
 * Traitement de fichiers JS externes à intégrer dans un ordre précis avant le
 */

gulp.task('js-vendors-spec', function () {
 
	// Rajoutez les fichiers dans le tableau passé à la fonction src
	gulp.src(['./src/vendors/js/spec/jquery-fallback.js'])
    	// Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))
    	.pipe(sourcemaps.init())
    	.pipe(uglify())
		// Concaténation dans un seul fichier
		.pipe(concat('vendors-spec.js'))
		.pipe(sourcemaps.write())
		// Copie dans le répertoire Js
		.pipe(gulp.dest('js'));
 
});


/**
 * @task : img
 * Traitement des images
 */
var imagemin = require('gulp-imagemin');
gulp.task('img', function() {
	 
	  gulp.src('src/img/*.{png,jpg,gif}')
	     // Gestion d'erreurs
    	.pipe(plumber(plumberErrorHandler))
	    .pipe(imagemin({
	    	// Qualité du traitement, 7 = max
	    	optimizationLevel: 7,
	    	// Options pour le Jpeg
	    	progressive: true
	    }))
	    // Copie dans le répertoire img
	    .pipe(gulp.dest('img'))
	 
	});


/**
 * @task : watch
 * Détecte les modifications de fichier et effectue automatiquement une tâche en réponse
 */
gulp.task('watch', function() {
	 
	  // Surveille les changements sur les fichiers sass ...
	  gulp.watch('src/sass/**/*.scss', ['sass']);
	  // ... sur les Css
	  gulp.watch('src/vendors/css/*.css', ['css-vendors']);
	  // ... sur les JS
	  gulp.watch('src/js/*.js', ['js']);
	  // ... sur les JS vendors
	  gulp.watch('src/vendors/js/*.js', ['js-vendors']);
	  // ... sur les JS vendors spec
	  gulp.watch('src/vendors/js/spec/*.js', ['js-vendors-spec']);
	  // ... sur les JS vendors pass-thru
	  gulp.watch('src/vendors/js/pass-thru/*.js', ['js-vendors-pass-thru']);
	  // ... sur les images
	  gulp.watch('src/img/*.{png,jpg,gif}', ['img']);
	
});


/**
 * Configuration de la tâche par défault 
 */
gulp.task('default', ['sass','css-vendors','js','js-vendors','js-vendors-spec','js-vendors-pass-thru','img']);
