
# Angular Avancé

## Tooling

* npm >= 6
* Angular Essentials pour VS Code
* @nagular/cli
* @compodoc/compodoc

## Commandes utiles


* `ng new`, `ng serve`, `ng build`
* `ng g SCHEMATIC PATH/NAME [OPTIONS]`
* `ng test --project=PROJECT_NAME [OPTIONS]` - (`--code-coverage`)

## Workspace Multiprojet

* `ng new WORKSPACE`
* `ng g app OTHER_APP_NAME`
* `ng g lib LIB_NAME`

Avantages :
* Renforcer les réutilisabilité des composants.
* Aligner le version des dépendances (un seul `package.json`)
* Alléger l'espace requis (un seul cli).
* Aisance pour le développements des librairies.


## 5 Key Concept

* Module
 * Component
 * Directive
 * Pipe
* Service

> Tous ces concepts sont exprimés sous la forme de `class` annotées ou décorées.

## 19 Décorateurs (annotations)

## Core Decorateur

* `@NgModule` - providers
* `@Component`
* `@Directive`
* `@Pipe` 
* `@Injectable`

## Communication Component

* `@Input`
* `@Output`
* `@HostListener`
* `@HostBinding`
* 🙈 `@ViewChildren` 
* 🙈 `@ViewChild`
* 🙈 `@ContentChildren`
* 🙈 `@ContentChild`
* `@Attribute`
   
## Injection
  
* `@Optional`
* `@Host`
* `@Self`
* `@SkipSelf`
* `@Inject`


## Component Pattern

* Projection de Contenu (Abstraction de Conteneur) `<ng-content select=""></ng-content>`
* Dumb vs Smart (Container / Presenter)
* Composition
* Decoration (qvec les directives)

## Pattern

* SharedModule
* PubSub (Borker)
* Facade


## Utilitaires

* Subsink

## Observable

* Observable principe d'unification de consomation de `valeurs synchrone ou asynchrone`
* `.pipe` conteneur permettant la mise en place de transformateurs ou  `operator`
* Subscription `.subscribe` sur un Observable pour la *consomation* des (data) *valeurs emise* par un *observer* `callback` 


### Classification Conceptuelle (usage) des composant

* Base de ui (Dumb)
* Layout
* Feature (Smart?)
* Routed Component
* View Component


## Directive

> Enrichissment - `Un Composant sans template` 

* `@HostListener`
* `@HostBinding`
