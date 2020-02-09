import React, { useState } from 'react';

import './HomeCommand.css';
import CommandsContainer from './CommandsContainer';

const HomeCommand = () => {
  const [route, setRoute] = useState('all');

  return (
    <div className="home-command-container">
      <div className="home-command-contents">
        <div className="command-category">
          <h1>Categories</h1>
          <div className="category-main">
            <ul>
              <li>
                <button onClick={() => setRoute('all')}>
                All
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('admin')}>
                Admin/mod
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('regular')}>
                Regular
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="command-main">
          {
            route === 'all'
              ? (
                <>
                  <h1>Admin</h1>
                  <CommandsContainer
                    title="Set Mode Role (IMPORTANT)"
                    desc="Sets the mod role of the server to be able to use mod commands. You can also set the mod role in the dashboard"
                    usage="Usage: $setmod <mod_role_name>"
                    example={['$setmod test mod role']}
                  />
                  <CommandsContainer
                    title="Test"
                    desc="Tests if the bot is running"
                    usage="$test"
                  />
                  <CommandsContainer
                    title="Role Counter"
                    desc="Counts how many members a role has"
                    usage="$rc <role_name>"
                    example={['$rc testrole']}
                  />
                  <CommandsContainer
                    title="Set Logger Channel"
                    desc="Enable/Disable the event logger"
                    usage="$setlogger <enable/disable> <channel_name>"
                    example={['$setlogger enable test-channel-name',
                      '$setlogger disable',
                    ]}
                  />
                  <h1>Mod</h1>
                  <CommandsContainer
                    title="Ban phrase"
                    desc="Adds/Deletes a ban phrase to the server"
                    usage="Usage: $addbanphrase/delbanphrase <phrase/word>"
                    example={['$addbanphrase bannedword', '$delbanphrase bannedword']}
                  />
                  <CommandsContainer
                    title="Custom Commands"
                    desc="Adds/Deletes/Edits a custom command to the server"
                    usage="Usage: $addcmd/delcmd/editcmd <command_name> <command_response>"
                    example={['$addcmd testcommand this is a test command!',
                      '$delcmd testcommand',
                      '$editcmd testcommand i edited this command',
                    ]}
                  />
                  <CommandsContainer
                    title="Mute"
                    desc="Temporarily mutes a user or Unmute a user"
                    usage="Usage: $tempmute/unmute <member> <1s/1m/1h/1d>"
                    example={['$tempmute/unmute @annoying_member 10d',
                      '$unmute @annoying_member',
                    ]}
                  />
                  <h1>Regular</h1>
                  <CommandsContainer
                    title="Help"
                    desc="Shows the commands and custom commands in the server"
                    usage="$help"
                  />
                  <CommandsContainer
                    title="Translate"
                    desc="Translates message from any language to english"
                    usage="$translate <your_message>"
                    example={['$translate Привет']}
                  />
                  <CommandsContainer
                    title="Wikipedia"
                    desc="Returns a summary of a wiki article"
                    usage="$wiki <search_word>"
                    example={['$wiki batman']}
                  />
                  <CommandsContainer
                    title="Avatar"
                    desc="Shows the user's avatar"
                    usage="$avatar <user> (optional)"
                    example={['$avatar @cycycy', '$avatar']}
                  />
                  <CommandsContainer
                    title="Get User Info"
                    desc="Shows the user's information in the server"
                    usage="$userinfo <user> (optional)"
                    example={['$userinfo @cycycy', '$userinfo']}
                  />
                  <CommandsContainer
                    title="Server Info"
                    desc="Shows the server's information"
                    usage="$serverinfo"
                  />
                  <h1>Cool Features</h1>
                  <CommandsContainer
                    title="Advice/cookie"
                    desc="Get life advice from bot"
                    usage="$advice, $cookie"
                  />
                  <CommandsContainer
                    title="AFK/GN"
                    desc="GN sets your status to sleeping and AFK sets your status to AFK"
                    usage=" $afk <your_message> (optional), $gn <your_message> (optional)"
                    example={['$afk see you again!', '$gn goodnight everyone!']}
                  />
                  <CommandsContainer
                    title="Tuck"
                    desc="Tucks the Sleeping User 4HEad"
                    usage=" $tuck <user> <emoji>"
                    example={['$tuck @cycycy :NaM:']}
                  />
                  <CommandsContainer
                    title="Cat facts"
                    desc="Gives you a fact about cats OMGSCoots"
                    usage="$catfact"
                  />
                  <CommandsContainer
                    title="Thesaurus"
                    desc="Gives you the definition of a word and example"
                    usage="$thesaurus"
                    example={['$thesaurus monkey']}
                  />
                </>
              )
              : (
                <>
                  {
                    route === 'admin'
                      ? (
                        <>
                          <h1>Admin</h1>
                          <CommandsContainer
                            title="Set Mode Role (IMPORTANT)"
                            desc="Sets the mod role of the server to be able to use mod commands. You can also set the mod role in the dashboard"
                            usage="Usage: $setmod <mod_role_name>"
                            example={['$setmod test mod role']}
                          />
                          <CommandsContainer
                            title="Test"
                            desc="Tests if the bot is running"
                            usage="$test"
                          />
                          <CommandsContainer
                            title="Role Counter"
                            desc="Counts how many members a role has"
                            usage="$rc <role_name>"
                            example={['$rc testrole']}
                          />
                          <CommandsContainer
                            title="Set Logger Channel"
                            desc="Enable/Disable the event logger"
                            usage="$setlogger <enable/disable> <channel_name>"
                            example={['$setlogger enable test-channel-name',
                              '$setlogger disable',
                            ]}
                          />
                          <h1>Mod</h1>
                          <CommandsContainer
                            title="Ban phrase"
                            desc="Adds/Deletes a ban phrase to the server"
                            usage="Usage: $addbanphrase/delbanphrase <phrase/word>"
                            example={['$addbanphrase bannedword', '$delbanphrase bannedword']}
                          />
                          <CommandsContainer
                            title="Custom Commands"
                            desc="Adds/Deletes/Edits a custom command to the server"
                            usage="Usage: $addcmd/delcmd/editcmd <command_name> <command_response>"
                            example={['$addcmd testcommand this is a test command!',
                              '$delcmd testcommand',
                              '$editcmd testcommand i edited this command',
                            ]}
                          />
                          <CommandsContainer
                            title="Mute"
                            desc="Temporarily mutes a user or Unmute a user"
                            usage="Usage: $tempmute/unmute <member> <1s/1m/1h/1d>"
                            example={['$tempmute/unmute @annoying_member 10d',
                              '$unmute @annoying_member',
                            ]}
                          />
                        </>
                      )
                      : (
                        <>
                          <h1>Regular</h1>
                          <CommandsContainer
                            title="Help"
                            desc="Shows the commands and custom commands in the server"
                            usage="$help"
                          />
                          <CommandsContainer
                            title="Translate"
                            desc="Translates message from any language to english"
                            usage="$translate <your_message>"
                            example={['$translate Привет']}
                          />
                          <CommandsContainer
                            title="Wikipedia"
                            desc="Returns a summary of a wiki article"
                            usage="$wiki <search_word>"
                            example={['$wiki batman']}
                          />
                          <CommandsContainer
                            title="Avatar"
                            desc="Shows the user's avatar"
                            usage="$avatar <user> (optional)"
                            example={['$avatar @cycycy', '$avatar']}
                          />
                          <CommandsContainer
                            title="Get User Info"
                            desc="Shows the user's information in the server"
                            usage="$userinfo <user> (optional)"
                            example={['$userinfo @cycycy', '$userinfo']}
                          />
                          <CommandsContainer
                            title="Server Info"
                            desc="Shows the server's information"
                            usage="$serverinfo"
                          />
                          <h1>Cool Features</h1>
                          <CommandsContainer
                            title="Advice/cookie"
                            desc="Get life advice from bot"
                            usage="$advice, $cookie"
                          />
                          <CommandsContainer
                            title="AFK/GN"
                            desc="GN sets your status to sleeping and AFK sets your status to AFK"
                            usage=" $afk <your_message> (optional), $gn <your_message> (optional)"
                            example={['$afk see you again!', '$gn goodnight everyone!']}
                          />
                          <CommandsContainer
                            title="Tuck"
                            desc="Tucks the Sleeping User 4HEad"
                            usage=" $tuck <user> <emoji>"
                            example={['$tuck @cycycy :NaM:']}
                          />
                          <CommandsContainer
                            title="Cat facts"
                            desc="Gives you a fact about cats OMGSCoots"
                            usage="$catfact"
                          />
                          <CommandsContainer
                            title="Thesaurus"
                            desc="Gives you the definition of a word and example"
                            usage="$thesaurus"
                            example={['$thesaurus monkey']}
                          />
                        </>
                      )
                    }
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default HomeCommand;
